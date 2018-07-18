#pragma once
#include<iostream>
#include<string>
//长整数
class LongInt
{
private:
	int sign = 1;//正负
	std::string number;//数值
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
	//输出长整数
	friend std::ostream& operator<<(std::ostream& os, const LongInt &num);
	//输入长整数
	friend std::istream& operator>>(std::istream& is, LongInt &num);
	~LongInt();
};

void longint();