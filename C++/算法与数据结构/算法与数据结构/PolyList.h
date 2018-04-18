#pragma once
#include<iostream>

#include<cmath>
#include<string>
//#include"CLinkList.h"

typedef struct Polynode{
	int coef;//ϵ��
	int	exp;//ָ��
	Polynode *link=nullptr;//ָ����һ���ڵ�
}Polynode, *Poly;

class PolyList//:CLinkList<Polynode>	
{
private:
	Polynode * head, *next,*last;
	std::string list;
	Polynode node;
	void addnode();
public:
	PolyList();
	void str_poly();
	void display();
	PolyList add(Polynode node);
	//friend PolyList operator=()
	friend PolyList operator+(PolyList& one, PolyList& two);
	friend PolyList operator-(PolyList list1, PolyList list2);
	friend PolyList operator*(PolyList list1, PolyList list2);
	//friend PolyList operator/(PolyList list1, PolyList list2);
	~PolyList();
};

