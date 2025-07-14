import java.util.Locale;

public class Main {
    public static void main(String[] args) {
    System.out.println("Hello");//breakline
    System.out.println("World");

    System.out.print("Again");//nobreakline
    System.out.println("Again");

    int y = 32;
    double x = 10.54353;
    System.out.println(y);
    System.out.printf("%.2f%n", x);//formatando para aparecerem 2 casas
    System.out.printf("%.4f%n", x);//formatando para aparecerem 4 casas

    Locale.setDefault(Locale.US);//formata para o estilo padrao ser do estados unidos
    System.out.println("US");
    System.out.printf("%.4f%n", x);//formatando para aparecerem 4 casas

    System.out.println("Resultado = " + x + " Metros");
    System.out.printf("Resultado = %.2f metros%n",x);

    String nome = "Joao";
    int idade = 22;
    double renda = 0;

    System.out.printf("%s tem %d anos e recebe %.2f", nome, idade, renda);
    }
}