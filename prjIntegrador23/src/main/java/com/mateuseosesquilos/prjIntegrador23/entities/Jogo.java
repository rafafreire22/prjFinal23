package com.mateuseosesquilos.prjIntegrador23.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_jogo")
public class Jogo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String gender;
    private String description;
    private String thumbnailpath;
    private String squad;
    private String url;

    public Jogo() {

    }

    public Jogo(Long id, String name, String platform, String url, String thumbnailpath, String gender, String description, String squad) {
        super();
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.description = description;
        this.squad = squad;
        this.url = url;
        this.thumbnailpath = thumbnailpath;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPlatform() {
        return url;
    }

    public void setPlatform(String platform) {
        this.url = platform;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getThumbnailpath() {
        return thumbnailpath;
    }

    public void setThumbnailpath(String thumbnailpath) {
        this.thumbnailpath = thumbnailpath;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSquad() {
        return squad;
    }

    public void setSquad(String squad) {
        this.squad = squad;
    }
}
