import os

link='E:/System File/Desktop/PY/ZH'
'''
fp = open(link,'r')

for eachLine in fp:
    print(eachLine)
'''

KEY=input('请输入判别符：')
name = os.path.basename(link)
dir = os.path.dirname(link)+'/'

for i in range(len(name)):
    if name[i] is not KEY:
        i+=1
    else:
        os.rename(dir + name, dir + name[i+1:])
        '''
        KEY=input('输0取消')
        if KEY==0:
            os.rename(dir + name[i+1:], dir + name)
        else:
            break
        '''
        break

print(name)



    
