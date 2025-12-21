package Encription;
import java.security.*;
import javax.crypto.*; 
import javax.crypto.spec.*; 
import java.util.*; 

public class Main {
    public static void main(String[] args) {
        String plainText = "Reinkarnation";

        SecureRandom secureRandom = new SecureRandom(); 
    
        byte[] key = new byte[16]; 
        secureRandom.nextBytes(key); 
        SecretKey secretKey = new SecretKeySpec(key, "AES"); 

        byte[] iv = new byte[12];
        secureRandom.nextBytes(iv);  

        int tagLength = 128;
        GCMParameterSpec parameterSpec = new GCMParameterSpec(tagLength, iv);  

        try {

        Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding"); 
        cipher.init(Cipher.ENCRYPT_MODE, secretKey, parameterSpec);
        
        byte[] cipherText = cipher.doFinal(plainText.getBytes()); 

        String encoded = Base64.getEncoder().encodeToString(cipherText); 

        System.out.println(encoded);  

        byte[] cipherBytes  = Base64.getDecoder().decode(encoded); 

        Cipher cipher2 = Cipher.getInstance("AES/GCM/NoPadding"); 
        cipher2.init(Cipher.DECRYPT_MODE, secretKey, parameterSpec); 

        byte[] plainBytes = cipher2.doFinal(cipherBytes);
        String decrypted = new String(plainBytes);
        
        System.out.println(decrypted); 

        

        } catch (Exception e) {
        e.printStackTrace();
        }
    }
}