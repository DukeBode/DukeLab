
.386
.model flat, stdcall
option casemap :none
.data
HelloWorld db "Hello World!", 0
.code
start:
invoke StdOut, addr HelloWorld
invoke ExitProcess, 0
end start