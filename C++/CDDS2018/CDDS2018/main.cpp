#include<iostream>
#include<cstdlib>
#include"sort.h"
#include"replace.h"
#include"horse.h"
#include"LongInt.h"
using namespace std;

auto catalog() {
	system("cls");
	cout
		<< "******************************************************************" << endl
		<< "*                 算法与数据结构课程设计                         *" << endl
		<< "******************************************************************" << endl
		<< "*                   【1】 排序算法比较                           *" << endl
		<< "*                   【2】 递归替换问题                           *" << endl
		<< "*                   【3】 国际象棋跳马                           *" << endl
		<< "*                   【4】 长整数加减乘                           *" << endl
		<< "*                   【0】   退出程序                             *" << endl
		<< "*                                                 v2018-7-5      *" << endl
		<< "******************************************************************" << endl
		<< "请选择：";
	int item, i;
	cin >> item;
	switch (item)
	{
	case 1:sort(); break;
	case 2://递归替换
		replace(); break;
	case 3://跳马
		while (true)
		{
			horse();
			std::cout << "\n按零键退出";
			cin >> i;
			if (i==0)break;
		}
		break;
	case 4:longint(); break;
	case 0:exit(1);
	default:
		break;
	}
}
////////////////////////////主程序//////////////////////////
int main()
{
	system("color B0");
	while (true) { 
		catalog(); 
	}
	return 0;
}