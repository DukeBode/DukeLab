#include "HelloWold.h"
#include <QtWidgets/QApplication>
#include<iostream>
using namespace std;
int main(int argc, char *argv[])
{
	QApplication a(argc, argv);
	HelloWold w;
	w.show();
	return a.exec();
}
