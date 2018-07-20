# POWERSHELL 脚本执行权限
- Restricted——默认的设置， 不允许任何script运行
- AllSigned——只能运行经过数字证书签名的script
- RemoteSigned——运行本地的script不需要数字签名，但是运行从网络上下载的script就必须要有- 数字签名
- Unrestricted——允许所有的script运行

windows默认不允许任何脚本运行，你可以使用"Set-ExecutionPolicy"cmdlet来改变的你PowerShell环境。例如，你可以使用如下命令让PowerShell运行在无限制的环境之下：
```powershell
Set-ExecutionPolicy Unrestricted;
```
但在win7下，必须使用管理员的权限启动命令命令行，否则会报“Set-ExecutionPolicy : 对注册表项“HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\PowerShell\1\ShellIds\Microsoft.PowerShell”的访问被拒绝。”错误。

使用java调用powershell脚本，可以使用以下命令：
```java
String cmd = "cmd /c powershell -ExecutionPolicy RemoteSigned
-noprofile -noninteractive -file
\""+ scriptFilename + "\"";
```