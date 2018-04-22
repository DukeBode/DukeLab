#pragma once
#include<iostream>
#include<cmath>
#include<string>
//#include"CLinkList.h"

typedef struct Polynode{
	int coef;//系数
	int	exp;//指数
	Polynode *link = nullptr;//指向下一个节点
}Polynode, *Poly;

class PolyList
{
	double *pcoefs;
	int *pexps;
	int num_of_items;
	int add(const PolyList &p, double *coefs, int *exps) const;
	int subtract(const PolyList &p, double *coefs, int *exps) const;
public:
	PolyList();
	PolyList(double coefs[], int exps[], int size);
	PolyList(const PolyList &p);
	~PolyList();
	PolyList &operator=(const PolyList &p);
	int degree() const;
	double evaluate(double x) const;
	bool operator==(const PolyList &p) const;
	bool operator!=(const PolyList &p) const;
	PolyList operator+(const PolyList &p) const;
	PolyList operator-(const PolyList &p) const;
	PolyList operator*(const PolyList &p) const;
	PolyList &operator+=(const PolyList &p);
	PolyList &operator-=(const PolyList &p);
	PolyList &operator*=(const PolyList &p);
};
