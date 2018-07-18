#pragma once
#include<iostream>
#include<fstream>
#include<string>
using namespace std;

class File{
private:
	string filename, lastname, fullname;
public:
	File(string name,string extension="");
	//覆盖重写
	auto write(string content);
	//追加
	auto add(string content, char end = '\n');
	//清除全文
	auto clear();
	//输出全文
	auto show(char character);
};
