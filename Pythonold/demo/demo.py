def 字符串组合():
    print('''
程序说明：
    用户输入两个字符串，然后将它们组合输出。
''')
    str1 = input('请输入一个人的名字')
    str2 = input('请输入一个国家的名字')
    print('世界这么大，{}想去{}看看。'.format(str1,str2))

def 整数序列求和():
    n = input('请输入整数N：')
    num = 0
    for i in range(int(n)):
        sum += i + 1
    print("1到n求和结果：", sum)

def 九九乘法表():
    for i in range(1,10):
        for j in range(1,10):
            print('{}*{}={:2}'.format(j,i,i*j), end=' ')
        print('')

def 阶乘和计算():
    N = input('请输入整数N')
    sum, tmp = 0, 1
    for i in range(1,int(N)+1):
        tmp *= i
        sum += tmp
    print('运算结果为：{}'.format(sum))

def 猴子吃桃():
    n=1
    for i in range(5,0,-1):
        n = (n+1)<<1
    print('猴子第一天摘了',n,"个桃子")

def 健康食谱():
    diet = ['西红柿','黄瓜','花椰菜','牛排','虾仁']
    for x in range(0,len(diet)):
        for y in range(0,len(diet)):
            if not(x==y):
                print('{}{}'.format(diet[x],diet[y]))

def 五角星():
    import turtle 
    turtle.fillcolor('red')
    turtle.begin_fill()
    while True:
        turtle.forward(200)
        turtle.right(144)
        if abs(turtle.pos()) < 1:
            break
    turtle.end_fill()

def 太阳花():
    import turtle
    turtle.color('red','yellow')
    turtle.begin_fill()
    while True:
        turtle.forward(200)
        turtle.left(170)
        if abs(turtle.pos()) < 1:
            break
    turtle.end_fill()
    #turtle.done()

def 螺旋线():
    import turtle
    import time

    turtle.speed('fastest')
    turtle.pensize(2)
    for x in range(100):
        turtle.forward(2*x)
        turtle.left(90)
    time.sleep(3)
    
def 多彩螺旋线():
    import turtle
    import time

    turtle.pensize(2)
    turtle.bgcolor('black')
    colors = ['red','yellow','purple','blue','green']
    turtle.tracer(False)
    for x in range(400):
        turtle.forward(2*x)
        turtle.color(colors[x%4])
        turtle.left(91)
    turtle.tracer(True)

def main():
    #字符串组合()
    ##整数序列求和()
    九九乘法表()
    #阶乘和计算()
    #猴子吃桃()
    #健康食谱()
    #五角星()
    #太阳花()
    #螺旋线()
    多彩螺旋线()

main()
