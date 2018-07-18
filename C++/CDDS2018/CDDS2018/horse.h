#pragma once
#include<iostream>
#include<stdio.h>
typedef struct
{
	int board[8][8]; //定义一个int的二位数组board
	int step;/*走的步数*/
}SeqList;

int exitn(int r, int c, int nexta[]);

int number(int r, int c);

int next(int r, int c);

void horse();