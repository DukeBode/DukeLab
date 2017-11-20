#!C:\Program Files Python36

#元组 简写、完整版Full、中文版Chinese
week = ('Sun','Mon','Tue','Wed','Thu','Fri','Sat')
F_week = ('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday')
C_week = ('星期日','星期一','星期二','星期三','星期四','星期五','星期六')

#number = （0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F)
C_number = ('零','壹','贰','叁','肆','伍','陆','柒','捌','玖','拾','屲','亗','岌','岄','岪','峘')

#字典
number = {'零':0,'壹':1,'贰':2,'叁':3,'肆':4,'伍':5,'陆':6,'柒':7,'捌':8,'玖':9,'拾':10,'屲':11,'亗':12,'岌':13,'岄':14,'岪':15,'峘':16}


Nweek = input('please input week:')

if('0' <= Nweek < '7'):
    Nweek = int(Nweek)
else:
    print('error')

print(C_week[Nweek])
print(C_week[Nweek][2])

#判断短文字数
Nessay = input('please input a essay;\n'.strip()).capitalize()
print('This article amounts to '+str(len(Nessay.split(' ')))+' words')
#先去掉两头空格，然后用空格分割得到列表，计算列表长度

for i in range(1,3):
    for j in range(
        1,3):
        if i*j//16 != 0:
            print(C_number[i*j//16],end='')
            print(C_number[16],end='')
        else:
            print('\0',end='\0')
        print(C_number[i*j%16],end='\t')
    print('')#换行

print(number[C_number[0]])

a='零'

print(a)






print(type(week))
print(type(week[0]))



#for循环
for i in range(7):
    print(C_week[i],end='\t')

print('')
for i in range(7):
    print(week[i],end='\t')

print('')
#is 身份操作符
print((F_week is C_week) == (F_week == C_week))

#in 成员操作符
print('一' in C_week)
print('一' not in week)
