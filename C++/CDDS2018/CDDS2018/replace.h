#pragma once
#include<iostream>
#include<cstdio>
#include<cstdlib>
#include<string>
#define rMAX 100
typedef struct
{
	char name[rMAX][rMAX];         //���ļ���
	char str[rMAX][rMAX][rMAX];     //��������                                    
}tmp;

void creatfile(tmp *s, int j);    //�ļ���������
void change(tmp *s, char *ch, int x);  //�ݹ麯��
void replace();