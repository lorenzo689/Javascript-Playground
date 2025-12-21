package koinzidenzindex;

public class Main {
    static String alphabet = "abcdefghijklmnopqrstuvwxyz"; 
    public static void main(String[] args) {

        String text = "mitko .mmenwumuMERnsthaftplot,lichimneugierde .umfurchtetemierAesicTtlauerndrichtenSauberedAObfru ,hobgeltzuAMEmewortodersoGIing";
        int length  = text.length(); 
        int i; 
        int[] ctr = new int[alphabet.length()];
        char cleaned; 
        String cleantext = ""; 

        text = text.toLowerCase(); 

        for (i = 0; i < length; i++) {

            cleaned = text.charAt(i); 

            if( cleaned >= 'a' && cleaned <= 'z') {
                cleantext += cleaned; 
            }
        }

        int lengthclean = cleantext.length(); 

        for (i = 0; i < lengthclean; i++) {

            char letter = cleantext.charAt(i); 
            int index   = letter - 'a';
            ctr[index]++;  
        }

        int sum = 0;

        for (i = 0; i < ctr.length; i++) {

            int f = ctr[i]; 
            sum += f * (f - 1); 
        }

        double ki  = (double) sum / (double) (lengthclean * (lengthclean - 1)); 
        System.out.println(ki); 
    }
}
