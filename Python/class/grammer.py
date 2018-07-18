# Python 代码块通过缩进对齐表达【代码逻辑】
# 使用【斜杠\】将一行分为多行显示

# 单行注释采用【#】开头
# 多行注释采用三引号【'''】或【"""】
'''
注释
'''
"""
注释
"""

# 【变量】由字母、数字、下划线组成，区分大小写
# 【字符串】用引号【'】【"】三引号【"""】【'''】来表示
# 【保留字符】
import keyword

for item in keyword.kwlist:
    print(item,end=',')

print(len(keyword.kwlist))

