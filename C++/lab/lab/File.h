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
	//������д
	auto write(string content);
	//׷��
	auto add(string content, char end = '\n');
	//���ȫ��
	auto clear();
	//���ȫ��
	auto show(char character);
};
