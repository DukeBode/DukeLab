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
		<< "*                 �㷨�����ݽṹ�γ����                         *" << endl
		<< "******************************************************************" << endl
		<< "*                   ��1�� �����㷨�Ƚ�                           *" << endl
		<< "*                   ��2�� �ݹ��滻����                           *" << endl
		<< "*                   ��3�� ������������                           *" << endl
		<< "*                   ��4�� �������Ӽ���                           *" << endl
		<< "*                   ��0��   �˳�����                             *" << endl
		<< "*                                                 v2018-7-5      *" << endl
		<< "******************************************************************" << endl
		<< "��ѡ��";
	int item, i;
	cin >> item;
	switch (item)
	{
	case 1:sort(); break;
	case 2://�ݹ��滻
		replace(); break;
	case 3://����
		while (true)
		{
			horse();
			std::cout << "\n������˳�";
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
////////////////////////////������//////////////////////////
int main()
{
	system("color B0");
	while (true) { 
		catalog(); 
	}
	return 0;
}