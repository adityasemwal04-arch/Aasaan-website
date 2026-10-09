package com.aasaan.erp.model;

public class Blog {
    private String slug;
    private String title;
    private String tag;
    private String industry;
    private String img;
    private String readTime;
    private String author;
    private String date;
    private String excerpt;
    private String content;

    public Blog() {
    }

    public Blog(String slug, String title, String tag, String industry, String img, String readTime, String author, String date, String excerpt, String content) {
        this.slug = slug;
        this.title = title;
        this.tag = tag;
        this.industry = industry;
        this.img = img;
        this.readTime = readTime;
        this.author = author;
        this.date = date;
        this.excerpt = excerpt;
        this.content = content;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getReadTime() {
        return readTime;
    }

    public void setReadTime(String readTime) {
        this.readTime = readTime;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getExcerpt() {
        return excerpt;
    }

    public void setExcerpt(String excerpt) {
        this.excerpt = excerpt;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
