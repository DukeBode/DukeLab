import sys
import math #导入数学模块
a = 19 + 2 * 4 - math.sin(0.5)

from math import cos #导入cos对象
b = cos(3)

from math import sin as f#导入sin对象并起别名f
c = f(2)

from tkinter import * #谨慎使用
fp = open(r'E:/System File/Desktop/PY/123.txt', 'a+')
print (a, end = '\n', file = fp)
fp.close()
 
#显示所有预加载模块的相关信息
print (sys.modules.items())
