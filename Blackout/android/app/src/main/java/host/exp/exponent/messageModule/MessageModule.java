package host.exp.exponent.messageModule;

import android.content.ContentResolver;
import android.database.Cursor;
import android.provider.Telephony;
import android.telecom.Call;
import android.telephony.SmsMessage;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;

import javax.annotation.Nonnull;

public class MessageModule extends ReactContextBaseJavaModule {
    private static final String NAME = "MessageModule";
    private ContentResolver contentResolver;


    MessageModule(ReactApplicationContext context) {
        super(context);
        contentResolver = context.getContentResolver();
    }

    @ReactMethod
    public void getAllMessages(String startTime, String endTime, Callback callback) {
        getAllSms(Double.parseDouble(startTime), Double.parseDouble(endTime), callback);
    }

    public void getAllSms(double startTime, double endTime, Callback callback) {
        Cursor c = contentResolver.query(Telephony.Sms.CONTENT_URI, null, null, null, null);
        WritableArray messages = new WritableNativeArray();
        int totalSMS = 0;
        if (c != null) {
            totalSMS = c.getCount();
            if (c.moveToFirst()) {
                for (int j = 0; j < totalSMS; j++) {
                    String smsDate = c.getString(c.getColumnIndexOrThrow(Telephony.Sms.DATE));
                    double timestamp = Double.parseDouble(smsDate);
                    if (timestamp < startTime || timestamp > endTime) {
                        break;
                    }

                    double number = Double.parseDouble(c.getString(c.getColumnIndexOrThrow(Telephony.Sms.ADDRESS)));
                    String body = c.getString(c.getColumnIndexOrThrow(Telephony.Sms.BODY));
                    boolean outgoing;
                    switch (Integer.parseInt(c.getString(c.getColumnIndexOrThrow(Telephony.Sms.TYPE)))) {
                        case Telephony.Sms.MESSAGE_TYPE_INBOX:
                            outgoing = false;
                            break;
                        case Telephony.Sms.MESSAGE_TYPE_OUTBOX:
                        default:
                            outgoing = true;
                            break;
                    }

                    WritableNativeMap map = new WritableNativeMap();
                    map.putString("outgoing", outgoing + "");
                    map.putString("timestamp", smsDate);
                    map.putString("message", body);
                    map.putString("contact", number + "");
                    messages.pushMap(map);
                    c.moveToNext();
                }
            }

            c.close();
        }

        callback.invoke(messages);
    }

    @Nonnull
    @Override
    public String getName() {
        return NAME;
    }
}
