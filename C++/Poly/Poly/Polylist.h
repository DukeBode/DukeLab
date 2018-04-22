#pragma once
#include<iostream>
#include<string>
#include<cctype>

typedef struct PolyNode {
	int coef;
	int exp;
	PolyNode *link = nullptr;
}*Polynode, Poly;

class Polylist
{
private:
	Polynode head, next, last;
	std::string list;
	Poly node;
	void init();
	void addnode();
public:
	Polylist();
	~Polylist();
	
	void str_poly();
	void display();//ÏÔÊ¾
	void clear();//Çå¿Õ
	//friend Polylist operator=(Polylist p1);
	Polylist operator+(Polylist p);
	Polylist operator-();
	Polylist operator*(Polylist p);
	friend Polylist operator+(Polylist p1,Polylist p2);
	//friend Polylist operator-(Polylist p1, Polylist p2);
	friend Polylist operator*(Polylist p1, Polylist p2);
};


