// 本题要求编写一个简单计算器程序，可根据输入的运算符，对2个整数进行加、减、乘、除或求余运算。题目保证输入和输出均不超过整型范围。

// 输入格式：
// 输入在一行中依次输入操作数1、运算符、操作数2，其间以1个空格分隔。操作数的数据类型为整型，且保证除法和求余的分母非零。

// 输出格式：
// 当运算符为+、-、*、/、%时，在一行输出相应的运算结果。若输入是非法符号（即除了加、减、乘、除和求余五种运算符以外的其他符号）则输出ERROR。
#include<stdio.h>
int main()
{
    int a,b,c;
    char ch;
    scanf("%d %c %d",&a,&ch,&b);
    switch(ch){
        case '+':c=a+b;break;
        case '-':c=a-b;break;
        case '*':c=a*b;break;
        case '/':c=a/b;break;
        case '\\':c=a\b;break;
        default:printf("ERROR");
    }
    if(c)printf(c);
    return 0;
}

// 3-11 比较大小 （10 分）
// 本题要求将输入的任意3个整数从小到大输出。

// 输入格式:
// 输入在一行中给出3个整数，其间以空格分隔。

// 输出格式:
// 在一行中将3个整数从小到大输出，其间以“->”相连。
#include<stdio.h>
void p(int a,int b,int c){
    printf("%d->%d->%d",a,b,c);
}
int main()
{
    int a,b,c;
    scanf("%d%d%d",&a,&b,&c);
    if(a<b){
        if(b<c)p(a,b,c);
        else if(a<c)p(a,c,b);
        else p(c,a,b);
    }else{
        if(b>c)p(c,b,a);
        else if(a>c)p(b,c,a);
        else p(b,a,c);
    }
    return 0;
}

#include<stdio.h>
int main()
{
    double x,cost;
    scanf("%lf",&x);
    if(x<0)printf("Invalid Value!");
    else{
        cost=x*0.53;
        if(x>50)cost+=(x-50)*0.05;
        printf("cost = %.2f",cost);
    }
    return 0;
}

