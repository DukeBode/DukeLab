JMP START
DB 'This is a program to measure the length of a string。'
DB 0D,0A
DB 'the length of the string is: $'
START: MOV AH,9
MOV DX,102
INT 21
MOV BX,101
MOV AL,24
MOV DH,FF
LOP: INC BX
INC DH
CMP AL,[BX]
JNZ LOP
MOV CH,2
MOV CL,4
LOP1: ROL DH,CL
MOV DL,DH
AND DL,0F
ADD DL,30
CMP DL,3A
JC J
ADD DL,7
J: MOV AH,2
INT 21
DEC CH
JNZ LOP1
INT 20
