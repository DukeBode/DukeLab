#include<iostream>
#include<typeinfo>
#define var auto
#define let var
using namespace std;


int main() 
{
	var a = 1;
	var b = '1';
	var c = "abc";
	cout << a + b << endl;
	//cout << typeid(a).name() << '\n' << typeid(b).name() << '\n' << typeid(c).name() << endl;
	return 0;
}