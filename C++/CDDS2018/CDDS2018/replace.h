#pragma once
#include<iostream>
#include<cstdio>
#include<cstdlib>
#include<string>
#define rMAX 100
typedef struct
{
	char name[rMAX][rMAX];         //存文件名
	char str[rMAX][rMAX][rMAX];     //存入数据                                    
}tmp;

void creatfile(tmp *s, int j);    //文件创立函数
void change(tmp *s, char *ch, int x);  //递归函数
void replace();