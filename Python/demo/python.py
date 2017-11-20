import turtle

def drawSnake(rad, angle, len, neckrad):
    for i in range(len):
        turtle.circle(rad, angle)
        turtle.circle(-rad, angle)
    turtle.circle(rad, angle/2)
    turtle.fd(rad)
    turtle.circle(neckrad+1, 180)
    turtle.fd(rad*2/3)

def main():
    #启动一个图形窗口
    turtle.setup(1300, 800, 0, 0)
    pythonsize = 30
    #轨迹宽度
    turtle.pensize(pythonsize)
    #轨迹颜色
    turtle.pencolor('blue')
    #启动时运动方向
    turtle.seth(-40)
    drawSnake(40, 80, 5, pythonsize)

main()
