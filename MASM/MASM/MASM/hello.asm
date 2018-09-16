TITLE Add and Subtract              (AddSub.asm)  
  
; This program adds and subtracts 32-bit integers.  
; Last update: 2/1/02  
  
  
INCLUDELIB kernel32.lib  
  
.MODEL flat,stdcall  
  
;.code  
ExitProcess PROTO,                      ; exit program  
    dwExitCode:DWORD        ; return code  
  
  
;.data  
;.code  
;main PROC  
  ;
    ;mov eax,10000h      ; EAX = 10000h  
    ;add eax,40000h      ; EAX = 50000h  
    ;sub eax,20000h      ; EAX = 30000h  
  ;
    ;push 0h  
    ;call ExitProcess  
  ;
;main ENDP  
;END main  
STACK	SEGMENT STACK
DB	100H DUP(?)
STACK	ENDS
DATA	SEGMENT
RESUL	DW	?
DATA	ENDS
CODE	SEGMENT
MAIN	PROC	FAR
ASSUME	CS:CODE,DS:DATA,SS:STACK
START:	PUSH	DS
SUB	AX,AX
PUSH	AX
MOV	AX,DATA
MOV	DS,AX
MOV	AX,5
CALL	FACT
MOV	RESUL,AX
RET
FACT	PROC
AND	AL,AL
JNE	IIA
MOV	AL,1
RET
IIA:	PUSH	AX
DEC	AL
CALL	FACT
X2:	POP	CX
MUL	CL
RET
FACT	ENDP
MAIN	ENDP
CODE	ENDS
END