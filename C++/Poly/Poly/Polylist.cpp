#include "Polylist.h"

Polylist::Polylist()
{
	init();
}


Polylist::~Polylist()
{	
}

void Polylist::init()
{
	head = (Polynode)malloc(sizeof(Poly));
	next = nullptr;
	last = head;
}

void Polylist::addnode()
{
	if (node.coef != 0) {
		last = last->link = (Polynode)malloc(sizeof(Poly));
		*last = node;
		std::cout << node.coef << "x^" << node.exp << std::endl;
	}
	node.exp = 0;
}

void Polylist::str_poly()
{
	std::cout << "请输入一元多项式:例P(x)=ax^b+c" << std::endl;
	getline(std::cin, list);
	int i = list.length(), num = 0, k = 0;
	//终止判断
	while (i>0) {
		if (list[--i] == '=') {
			node.coef = num; //coef
			this->addnode();
			break;
		}
		if (list[i] == ' ')continue;
		if (isdigit(list[i])) {
			num += (list[i] - '0')*(int)pow(10, k++);
		}
		else {
			switch (list[i])
			{
			case '-':
				num = -num;
				k = 1;
				while (list[i - k] == ' ')k++;
				if (list[i - k] >= 'A' || list[i-k]=='(') {
					node.exp = num;//exp
					break;
				}
			case '+':
				node.coef = num;
				this->addnode();
				break;//+coef;
			case '^':
			default:
				node.exp = num;//exp
							   //避重运算
				while (!isdigit(list[i]))
					if (i > 0)i--; i++;
				break;
			}
			k = num = 0;
		}
	}
}

void Polylist::display()
{
	if (head->link)next = head->link;
	char a = '=';
	while (next != nullptr && next->coef != 0) {
		if (next->exp != 0) {//幂不为零
			if (next->coef > 0) {
				std::cout << a;
				if (next->coef != 1)
					std::cout << next->coef;
			}
			else {
				if (a == '=')std::cout << '=';
				std::cout << '-';
				if (next->coef != -1)
					std::cout << -next->coef;
			}
			std::cout << "x^";
			if (next->exp < 0)
				std::cout << '(' << next->exp << ')';
			else if (next->exp > 1)
				std::cout << next->exp;
		}else {//幂为零
			if (a == '=') 
				std::cout << a;
			else if (next->coef > 0)
				std::cout << a;
			std::cout << next->coef;
		}
		if (a == '=')a = '+';
		next = next->link;
	}
	std::cout << std::endl;
}

void Polylist::clear()
{
	while (head) {
		next = head->link;
		delete head;
		head = next;
	}
	init();
}

Polylist Polylist::operator+(Polylist p)
{
	Polylist temp;

	return Polylist();
}

Polylist Polylist::operator-()
{

	return Polylist();
}

Polylist Polylist::operator*(Polylist p)
{
	return Polylist();
}

Polylist operator+(Polylist p1, Polylist p2)
{
	Polylist p;
	p1.next = p1.head->link;
	p2.next = p2.head->link;
	while (p1.next) {
		p.node=*(p1.next);
		while (p2.next) { 
			if (p2.next->exp == p1.next->exp)
				p.node.coef += p2.next->coef;
		}
		p.addnode();
		p1.next = p1.next->link;
	}
	return p;
}

Polylist operator*(Polylist p1, Polylist p2)
{
	return Polylist();
}
