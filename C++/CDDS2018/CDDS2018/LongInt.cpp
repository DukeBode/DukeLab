#include "LongInt.h"
//判断左字符串是否大于右字符串
bool LongInt::isbig(std::string& l, std::string& r)
{
	if (l.size() == r.size())
		return l > r;
	return l.size() > r.size() ? true : false;
}

//左值大Ture，相等、小false
bool LongInt::compare(LongInt lnum, LongInt rnum)
{
	if (lnum.sign == rnum.sign) {
		if (lnum.sign > 0) {
			if (isbig(lnum.number, rnum.number))return true;
		}
		else if (isbig(rnum.number, lnum.number))return true;
	}
	else if (lnum.sign > rnum.sign)return true;
	return false;
}

LongInt::LongInt(std::string str)
{
	if (str.front() == '-') {
		sign = -1;
		str.erase(0, 1);
	}
	else if (str.front() == '+')str.erase(0, 1);
	number = str;
}

LongInt LongInt::operator+(LongInt num)
{
	LongInt lint;
	std::string l, r, small;
	auto lsize = (*this).size(), rsize = num.size();
	auto max = lsize > rsize ? lsize : rsize;
	auto temp = 0;
	unsigned i = 0;
	if (sign == num.sign) {
		std::copy(number.crbegin(), number.crend(), std::back_inserter(l));
		std::copy(num.number.crbegin(), num.number.crend(), std::back_inserter(r));
		lint.sign = sign;
		while (temp || i < max) {
			temp += i < lsize ? l[i] - '0' : 0;
			temp += i < rsize ? r[i] - '0' : 0;
			lint.number += '0' + temp % 10;
			temp /= 10;
			i++;
		}
		l = lint.number.erase(0, 1);
		lint.number.clear();
		std::copy(l.crbegin(), l.crend(), std::back_inserter(lint.number));
	}
	else {
		if (num.number == number)return lint;
		lint = isbig(number, num.number) ? *this : num;
		small = lint.sign == sign ? num.number : number;
		auto min = small.size();
		while (max > i) {
			if (min < ++i)break;
			temp = max >= i ? lint.number[max - i] - '0' : 0;
			while (temp < small[min - i] - '0') {
				int count = 1;	
				while (max - i >= count) {
					if (lint.number[max - i - count] > '0') {
						lint.number[max - i - count]--;
						temp += std::pow(10, count);
						break;
					}
					count++;
				}
			}
			temp -= small[min - i] - '0';
			for (int count = 0; temp > 0 || count == 0; count++) {
				lint.number[max - i - count] = temp % 10 + '0';
				temp = temp / 10;
			}
		}
	}
	while (lint.number[0] == '0')lint.number.erase(0, 1);
	return lint;
}

LongInt LongInt::operator-(LongInt num)
{
	num.sign = num.sign > 0 ? -1 : 1;
	return *this + num;
}

LongInt LongInt::operator*(LongInt num)
{
	LongInt lint;
	lint.sign = sign * num.sign;
	auto lsize = (*this).size();
	auto rsize = num.size();
	int temp = 0, k = 1;
	for (int i = 0; i < lsize; i++) {
		for (int j = 0; (j < rsize || temp); j++) {
			temp += j < rsize ? (number[lsize - i - 1] - '0')*(num.number[rsize - j - 1] - '0') : 0;
			if (j + i < k) {
				temp += lint.number[j + i] - '0';
				lint.number[j + i] = '0' + temp % 10;
			}
			else {
				lint.number += '0' + temp % 10;
				k++;
			}
			temp /= 10;
		}
	}
	std::string str=lint.number;
	lint.number.clear();
	std::copy(str.crbegin(), str.crend(), std::back_inserter(lint.number));
	if(lint.number=="0")lint.sign = 1;
	return lint;
}

//num为零报错
LongInt LongInt::operator/(LongInt num)
{
	LongInt li;
	if (*this == li)return li;
	LongInt  max(number), min(num.number), add("1");
	while (max >= min)
	{
		max = max - min;
		li = li + add;
	}
	li.sign = sign * num.sign;
	return li;
}

const bool & LongInt::operator==(const LongInt & num) {
	return number == num.number&&sign == num.sign ? true : false;
}

const bool & LongInt::operator!=(const LongInt & num) {
	return number == num.number&&sign == num.sign ? false : true;
}

const bool & LongInt::operator>(const LongInt & num) {
	return compare(*this, num);
}

const bool & LongInt::operator>=(const LongInt & num) {
	return !compare(num, *this);
}

const bool & LongInt::operator<(const LongInt & num) {
	return compare(num, *this);
}

const bool & LongInt::operator<=(const LongInt & num) {
	return !compare(*this, num);
}

LongInt::~LongInt()
{
}

std::ostream & operator<<(std::ostream & os, const LongInt & num)
{
	if (num.sign < 0)os << '-';
	os << num.number;
	return os;
}

std::istream & operator>>(std::istream & is, LongInt & num)
{
	num.sign = 1;
	std::string str;
	is >> str;
	if (str.front() == '-') {
		num.sign = -1;
		str.erase(0, 1);
	}
	else if (str.front() == '+')str.erase(0, 1);
	num.number = str;
	return is;
}

void longint()
{
	system("cls");
	LongInt lnum, rnum, num;
	char ch;
	int x = 2;
	std::cout << "请输入所需计算的长整数及运算符号（如：1000 + -200）：" << std::endl;
	std::cin >> lnum >> ch >> rnum;
	switch (ch)
	{
	case '+':num = lnum + rnum;break;
	case '-':num = lnum - rnum;break;
	case '*':num = lnum * rnum;break;
	case '/':num = lnum / rnum;break;
	default:
		break;
	}
	std::cout << std::endl << lnum
		<< std::endl << ch
		<< std::endl << rnum
		<< std::endl << '='
		<< std::endl << num;
	std::cout << "\n按任意键继续：";  while (x--)std::cin.get();
}
