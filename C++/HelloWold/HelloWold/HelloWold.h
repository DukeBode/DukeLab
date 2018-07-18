#pragma once

#include <QtWidgets/QMainWindow>
#include "ui_HelloWold.h"

class HelloWold : public QMainWindow
{
	Q_OBJECT

public:
	HelloWold(QWidget *parent = Q_NULLPTR);

private:
	Ui::HelloWoldClass ui;
};
