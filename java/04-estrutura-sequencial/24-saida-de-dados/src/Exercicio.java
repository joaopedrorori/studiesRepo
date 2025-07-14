import java.util.Locale;

public class Exercicio {

    public static void main(String[] args){
//        inicie as seguntes variaveis
        String product1 = "Computer";
        String product2 = "Office desk";

        int age = 22;
        int code = 5290;
        char gender = 'F';

        double price1 = 2100.0;
        double price2 = 650.5;
        double measure = 53.234567;

//        em seguida, usando os valores da variaveis, produza a seguinte saida no console.
//        Products:
//        Computer, which price is $ 2100,00
//        Office desk, which price is 650,50;
//
//        Record: 22 years old, code 5290 and gender: F
//
//        Measure with eight decimal places: 53, 23456700
//        Rounded (three decimal places): 53,235
//        US decimal point: 53.235

        System.out.printf("Products:%nComputer, which price is $%.2f%nOffice desk which price is $%.2f%n%nRecord: %d years old, code %d and gender: %c%n%nMeasure with eight decimal places: %.8f%nRounded (three decimal places):%.3f%n",price1, price2, age, code, gender, measure,measure);
        Locale.setDefault(Locale.US);
        System.out.printf("US decimal point %.3f", measure);
    }

}
