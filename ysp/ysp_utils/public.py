import random


def genereate_guid(length=10):
    e = "abcdefghijklmnopqrstuvwxyz"
    guid_first_arr = [e[random.randint(0, len(e) - 1)] for i in range(8)]
    guid_first = "".join(map(str, guid_first_arr))
    guid_last_arr = [e[random.randint(0,len(e)-1)] for i in range(11)]
    guid_last = "".join(map(str,guid_last_arr))
    return  guid_first+"_"+guid_last

# def find_pid_by_vid(pid):
#     channne_obj = filter(lambda x: x["pid"] == pid ,channels_json)
#     c_list = list(channne_obj)
#     if len(c_list) >1:
#         raise  Exception("有重复的频道vid")
#     return  c_list[0]["vid"]
#
# print(find_pid_by_vid("600002264"))