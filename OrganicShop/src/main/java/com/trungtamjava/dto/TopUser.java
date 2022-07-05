package com.trungtamjava.dto;

public class TopUser {
private Integer userID;
private Integer total;
public TopUser(Integer userID, Integer total) {
	super();
	this.userID = userID;
	this.total = total;
}
public TopUser() {
	super();
}
public Integer getUserID() {
	return userID;
}
public void setUserID(Integer userID) {
	this.userID = userID;
}
public Integer getTotal() {
	return total;
}
public void setTotal(Integer total) {
	this.total = total;
}
@Override
public String toString() {
	return "TopUser [userID=" + userID + ", total=" + total + "]";
}

}
