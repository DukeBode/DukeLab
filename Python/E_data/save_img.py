import os
import urllib.request
def save_img(url, path):
    message = None
    try:
        file = open(path + os.path.basename(url), 'wb')
        request = urllib.request.urlopen(url)
        file.write(request.read())
    except Exception as e:
        message = str(e)
    else:
        message = os.path.basename(url)
    finally:
        if not file.closed:
            file.close()
        return message


if __name__ == '__main__':
    save_img('https://avatar.csdn.net/0/6/7/3_sinat_33455447.jpg','./')
