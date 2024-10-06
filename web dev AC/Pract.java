import java.text.Collator;
import java.util.*;
import java.util.stream.Collectors;

public class Pract{
    public static void main(String[] args) {
        List<String> names = Arrays.asList("lohith", "ram", "keshav");
        
        List<String> optnames = names.stream().map(String::toUpperCase).collect(Collectors.toList());
        System.out.println(optnames);
        
        List<Integer> nums = Arrays.asList(1,2,3,4,5,6);
        int sum = 0;
        Optional<Integer> numout = nums.stream().reduce((x, y) -> x + y);
        System.out.println(numout);
    }
}