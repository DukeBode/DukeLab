#include "PolyList.h"

void PolyList::addnode()
{
	last = last->link = (Polynode *)malloc(sizeof(Polynode));
	*last = node;
	std::cout << node.coef << " " << node.exp << std::endl;
	node.exp = 0;
}

PolyList::PolyList()
{
	head = (Polynode *)malloc(sizeof(Polynode));
	next = nullptr;
	last = head;
}
void PolyList::str_poly()
{
	std::cout << "请输入一元多项式:例P(x)=ax^b+c" << std::endl;
	getline(std::cin, list);
	int i = list.length(), num = 0, k = 0;
	//终止判断
	while (i>0){
		if (list[--i] == '=') { 
			node.coef = num; //coef
			this->addnode();
			break;
		}
		if (list[i] == ' ')continue;
		if (isdigit(list[i])) { 
			num += pow(10, k++)*(list[i] - '0'); 
		}else {
			switch (list[i])
			{
			case '-':
				num = -num;
				k = 1;
				while (list[i - k] == ' ')k++;
				if (isalpha(list[i - k]) || list[i - k] == '^') {
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
				if (i > 0)i--;i++;
				break;	
			}
			k = num = 0; 
		}
	}
}

void PolyList::display()
{
	if (head->link)next = head->link;
	char a='=';
	do
	{
		if (next->coef > 1) { 
			std::cout << a << next->coef; 
			if (a = '=')a = '+';
		}
		else if (next->coef < -1)std::cout << next->coef;
		else if (next->coef == -1)std::cout << '-';
		std::cout << "x^";
		if (next->exp < 0 )std::cout<< '(' << next->exp << ')';
		else if (next->exp > 1)std::cout << next->exp;
	} while (next->link == nullptr);
}

PolyList PolyList::add(Polynode node)
{
	next = (Polynode *)malloc(sizeof(Polynode));
	*next = node;
	return PolyList();
}

PolyList operator+(PolyList& one, PolyList& two)
{
	PolyList temp;
	Polynode *p = one.head, *q = two.head, *t = temp.head;
	while (p->link != nullptr) {
		//t->link = (Polynode *)malloc(sizeof(Polynode));
		//t = t->link;
		if (q->link == nullptr) {
			while (p->link != nullptr) {
				t->link = (Polynode *)malloc(sizeof(Polynode));
				t = t->link;
				*t = *(p->link);
				t->link = nullptr;
			}
			return temp;
		}
		if (p->exp > q->exp) {
			*t = *p;
		}
		p = p->link; q = q->link;
		if (p->exp == q->exp) {
			t->coef = p->coef + q->coef;
			t->exp = p->exp;
		}
		
	}
	return PolyList();
}

PolyList operator-(PolyList list1, PolyList list2)
{
	return PolyList();
}

PolyList operator*(PolyList list1, PolyList list2)
{
	return PolyList();
}

PolyList operator/(PolyList list1, PolyList list2)
{
	return PolyList();
}

PolyList::~PolyList()
{
	delete head, next, last;
}
