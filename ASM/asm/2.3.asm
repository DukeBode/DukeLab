DISP MACRO MSG
LEA DX,MSG
MOV AH,9
INT 21H
MOV AH,4CH
INT 21H
ENDM
STACK SEGMENT STACK
DB 256 DUP(0)
STACK ENDS
DATA SEGMENT
PARM DB 16 DUP(?)
BRTABLE DW OFFSET BRA,OFFSET BRB,OFFSET BRC
DW OFFSET BRD,OFFSET BRE,OFFSET BRF
MSGA DB 'I LIKE MY IBM-PC!$'
MSGB DB 'HOW ARE YOU!$'
MSGC DB 'NIBAO COLLEGE$'
MSGD DB 'THIS IS A SAMPLE$'
MSGE DB 'WELLCOME USE MY COPUTER!$'
MSGF DB 'THE ASSEMBLER LANGUAGE OF 8088$'
ERRMS DB 'ERROR!! INVALID PARAMETER!!$'
DATA ENDS
CODE SEGMENT
ASSUME CS:CODE,DS:DATA,SS:STACK
START: MOV AX,DATA
MOV ES,AX
MOV SI,80H
LEA DI,PARM
MOV CX,16
CLD
REP MOVSB
MOV DS,AX
CMP PARM,2
JC ERR
MOV AL,PARM+2
SUB AL,30H
JC ERR
CMP AL,6
JNC ERR
LEA BX,BRTABLE
CBW
ADD AX,AX
ADD BX,AX
JMP [BX]
ERR: DISP ERRMS
BRA: DISP MSGA
BRB: DISP MSGB
BRC: DISP MSGC
BRD: DISP MSGD
BRE: DISP MSGE
BRF: DISP MSGF
CODE ENDS
END START
