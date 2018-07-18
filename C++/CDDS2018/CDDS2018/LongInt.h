#pragma once
#include<iostream>
#include<string>
//������
class LongInt
{
private:
	int sign = 1;//����
	std::string number;//��ֵ
	bool isbig(std::string& l, std::string& r);
	bool compare(LongInt lnum, LongInt rnum);
public:
	LongInt(std::string str="0");
	auto size() { return number.size(); }
	LongInt operator+(LongInt num);
	LongInt operator-(LongInt num);
	LongInt operator*(LongInt num);
	LongInt operator/(LongInt num);
	//LongInt operator%(LongInt num);
	const bool& operator==(const LongInt &num);
	const bool& operator!=(const LongInt &num);
	const bool& operator >(const LongInt &num);
	const bool& operator>=(const LongInt &num);
	const bool& operator <(const LongInt &num);
	const bool& operator<=(const LongInt &num);
	//���������
	friend std::ostream& operator<<(std::ostream& os, const LongInt &num);
	//���볤����
	friend std::istream& operator>>(std::istream& is, LongInt &num);
	~LongInt();
};

void longint();