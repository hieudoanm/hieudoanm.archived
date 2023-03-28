"""
File System
"""


def read_file(file_name):
    """
    Read File
    """
    open_file = open(file_name, "r", encoding='utf-8')
    return open_file.read()


def write_file(file_name, content):
    """
    Write File
    """
    output = open(file_name, "w", encoding='utf-8')
    output.write(content)
    output.close()
