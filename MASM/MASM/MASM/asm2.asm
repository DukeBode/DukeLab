
DATA     SEGMENT
MESSAGE DB       'THIS IS SAMPLE PROGRAM OF KEYBOARD AND DISPLAY'
         DB       0DH,0AH,'PLEASE STRIKE THE KEY!',0DH,0AH,'$'
DATA    ENDS
STACK    SEGMENT  PARA STACK 'STACK'
         DB       50 DUP(?)
STACK    ENDS
CODE    ASSUME   CS:CODE,DS:DATA,SS:STACK
START:   MOV      AX,DATA
         MOV      DS,AX
         MOV      DX,OFFSET MESSAGE
         MOV      AH,9
         INT      21H
AGAIN:   MOV      AH,1
         INT      21H
         CMP      AL,1BH
         JE       EXIT
         CMP      AL,7AH
         JA       ND
         AND      AL,11011111B
ND:      MOV      DL,AL
         MOV      AH,2
         INT      21H
         JMP      AGAIN
EXIT:    MOV      AH,4CH
         INT      21H
CODE     ENDS
         END      START