#include<random>
#pragma once

//��ȡһ�������
template<typename T>
auto rand_num(int min = 1, int max = 64) {
	random_device rd;
	uniform_int_distribution<T> u(min, max);
	return u(rd);
}