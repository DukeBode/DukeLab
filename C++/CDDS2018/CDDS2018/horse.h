#pragma once
#include<iostream>
#include<stdio.h>
typedef struct
{
	int board[8][8]; //����һ��int�Ķ�λ����board
	int step;/*�ߵĲ���*/
}SeqList;

int exitn(int r, int c, int nexta[]);

int number(int r, int c);

int next(int r, int c);

void horse();