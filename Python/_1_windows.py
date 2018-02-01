import tkinter
import tkinter.messagebox

# 创建窗体
root = tkinter.Tk()
root.title('hello,world')

# 标签
labelName = tkinter.Label(root, text='User Name:', justify=tkinter.RIGHT, width=80)
labelName.place(x=10, y=5, width=80, height=20)
# 文本框
varName = tkinter.StringVar(root, value='')
entryName = tkinter.Entry(root, width=80, textvariable=varName)
entryName.place(x=100, y=5, width=80, height=20)

labelPwd = tkinter.Label(root, text='User Pwd:', justify=tkinter.RIGHT, width=80)
labelPwd.place(x=10, y=30, width=80, height=20)

varPwd = tkinter.StringVar(root, value='')
entryPwd = tkinter.Entry(root, show='*', width=80, textvariable=varPwd)
entryPwd.place(x=100, y=30, width=80, height=20)


def login():
    name = entryName.get()
    pwd = entryPwd.get()
    if name == 'admin' and pwd == '123456':
        tkinter.messagebox.showinfo(title='恭喜', message='登陆成功！')
    else:
        tkinter.messagebox.showerror('警告', message='用户名或密码错误')


buttonOk = tkinter.Button(root, text='Login', command=login)
buttonOk.place(x=30, y=70, width=50, height=20)


def cancel():
    varName.set('')
    varPwd.set("")


buttonCancel = tkinter.Button(root, text='Cancel', command=cancel)
buttonCancel.place(x=90, y=70, width=50, height=20)
# 运行
root.mainloop()
