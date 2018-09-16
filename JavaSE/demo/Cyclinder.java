import java.io.I;

public class Cylinder{
    public static void main(String[] args) throw IOException{
        BufferedReader buf = new BufferedReader(new InputStreamReader(System.in));
        float radius,height;
        String r,h;

        System.out.println("请输入圆柱体的地半径");
        r = buf.readLine();
        
        System.out.println("请输入圆柱体的高");
        h = buf.readLine();

        radius = float.parsefloat(r);
        height = float.parsefloat(h);

        System.out.println("体积的运算结果："+3.14*Math.pow(radius,2)*height);
    }
}