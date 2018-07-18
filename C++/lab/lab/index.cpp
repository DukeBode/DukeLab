#include<iostream>
#include<cstdlib>
#include"sort.h"
#include"File.h"
using namespace std;
using node=struct nodeabc
{

};
//有序类型，指定最大最小值，随机排序
//template<typename T>
//T random(int n, T min = NULL, T max = NULL)
//{
//
//}

//无序类型，表内取值，随机排序
//template<typename T>
//T random(T *list[0], int n) {
//
//}
//
//template<typename T>
//struct anydata {
//	T data;
//	string type;
//	int ptr=nullptr;
//};
//int char float double bool struct
//template<typename T>
//void adddata(T Data){
//	anydata<T> D;
//	D.data = Data;
//	D.type = typeid(Data).name;
//	D.ptr = &D;
//	cout<<*(D.ptr)
//}
auto quick(string list,int left,int right) {

}
//置乱有序数列
template<class T>
auto random(T temp[], int n)
{
	T t;
	int i = 0;
	while (n-i) {
		t = temp[++i];
		int num = rand() % n;
		temp[i] = temp[num];
		temp[num] = t;
	}
}

int main(void)
{
	int d[100] = { 5,6,9,2,4,82 };
	char a[80] = { 'a','d','c','q','e','b' };
	int b = 100;
	//随机数
	int i=0;
	while (b - i)d[i] = i++;
	random(d, b);
	for (int i = 0; i < b; i++) {
		cout << i << '\t'<<d[i] <<endl;
	}
#ifdef DEBUG
	cout<<
#endif // DEBUG
	Selection(&d[0], b);
	for (int i = 0; i<b; i++)
		cout << d[i] << endl;
	return 0;
}
