package host.exp.exponent.messageModule;

import com.google.gson.GsonBuilder;

public class Message {
    private boolean outgoing;
    private String contact;
    private double timestamp;
    private String message;

    public Message(boolean outgoing, String contact, double timestamp, String message) {
        this.outgoing = outgoing;
        this.contact = contact;
        this.timestamp = timestamp;
        this.message = message;
    }

    public boolean isOutgoing() {
        return outgoing;
    }

    public void setOutgoing(boolean outgoing) {
        this.outgoing = outgoing;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public double getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(double timestamp) {
        this.timestamp = timestamp;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String toJsonString() {
        GsonBuilder gsonBuilder = new GsonBuilder();
        return gsonBuilder.create().toJson(this);
    }
}
