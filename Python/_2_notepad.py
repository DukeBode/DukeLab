import tkinter
import tkinter.scrolledtext

# 应用程序窗口
app = tkinter.Tk()
app.title('Notepad')
app['width'] = 800
app['height'] = 600

menu = tkinter.Menu(app)
submenu = tkinter.Menu(menu, tearoff=0)
menu.add_cascade(label='File', menu=submenu)

app.config(menu=menu)

txtContent = tkinter.scrolledtext.ScrolledText(app, wtap=tkinter.WORD)
txtContent.pack(fill=tkinter.BOTH, expand=tkinter.YES)

app.mainloop()
