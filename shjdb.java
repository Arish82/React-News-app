import java.util.*;

public class shjdb {
 
    public static void main(String[] args) {
        String str = new String("This is Java project");  
        char[] ch = new char[10]; 
        str.getChars(6, 16, ch, 0);  
        System.out.println(ch);  


        
    }
}
