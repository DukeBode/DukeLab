def input_num(language = '请输入一个数字：',end=3, language_error = '请重输：'):
    '''
    功能：根据提示，输入一个整数,输入次数默认为三遍
    '''
    if isinstance(language,str) and isinstance(language_error,str):
       state = end
       num = input(language)
    else:
        print('Error,详情请咨询源码方')
    while(state != 0):
        if type(eval(num)) == int:
            return(int(num))
            state = 0
        else:
            print('error',type(eval(num)))
            state -= 1
            if state == 0:
                print('请重启程序')
            else:
                num = input(language_error)
                

def guess_set():
    import random
    num_min = input_num('请输入最小值：')
    num_max = input_num('请输入最大值：')
    if num_min<num_max:
        return random.randint(num_min, num_max)
    else:
        print('\n------重新设置------')
        guess_set()

def guess_menu(num=1):
    if num==1:
        pass

def guess_init():
    print('''
+----------------------+
|                      |
|      1)开始游戏      |
|      2)游戏说明      |
|      3)游戏设置      |
|                      |
|      蝈蝈工作室      |
+----------------------+
''')
    

guess_init()
guess_menu()

i = 0

num_0=guess_set()
num=input_num('请猜一个数')
while(num != num_0):
    if num > num_0:
        print('你想的太大啦，请重新输入：')
    else:
        print('你想的太小了')
    num = input('请输入一个数：')
    num = int(num)
    i += 1
print('大蛔虫')
print('游戏结束！！')

