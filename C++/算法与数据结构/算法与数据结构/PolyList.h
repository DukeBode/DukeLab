#pragma once
#include<iostream>

#include<cmath>
#include<string>
//#include"CLinkList.h"

typedef struct Polynode{
	int coef;//系数
	int	exp;//指数
	Polynode *link=nullptr;//指向下一个节点
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

