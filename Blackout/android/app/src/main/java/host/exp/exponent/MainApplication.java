package host.exp.exponent;

import com.facebook.react.BuildConfig;
import com.facebook.react.ReactPackage;
import com.reactnativecommunity.cameraroll.CameraRollPackage;
import com.wscodelabs.callLogs.CallLogPackage;

import org.unimodules.core.interfaces.Package;

import java.util.Arrays;
import java.util.List;

import expo.loaders.provider.interfaces.AppLoaderPackagesProviderInterface;
import host.exp.exponent.generated.BasePackageList;
import host.exp.exponent.messageModule.MessagesPackage;
import okhttp3.OkHttpClient;

// Needed for `react-native link`
// import com.facebook.react.ReactApplication;

public class MainApplication extends ExpoApplication implements AppLoaderPackagesProviderInterface<ReactPackage> {

    public static OkHttpClient.Builder okHttpClientBuilder(OkHttpClient.Builder builder) {
        // Customize/override OkHttp client here
        return builder;
    }

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    // Needed for `react-native link`
    public List<ReactPackage> getPackages() {
        return Arrays.asList(
                // Needed for `react-native link`
                //  new MainReactPackage(),
                new CameraRollPackage(),
                new CallLogPackage(),
                new MessagesPackage()
        );
    }

    public List<Package> getExpoPackages() {
        return new BasePackageList().getPackageList();
    }

    @Override
    public String gcmSenderId() {
        return getString(R.string.gcm_defaultSenderId);
    }
}
